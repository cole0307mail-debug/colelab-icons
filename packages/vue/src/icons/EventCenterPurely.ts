// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EventCenterPurelySvg from '@colelab/icons-svg/es/asn/EventCenterPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EventCenterPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EventCenterPurelySvg }, slots);
  },
});
