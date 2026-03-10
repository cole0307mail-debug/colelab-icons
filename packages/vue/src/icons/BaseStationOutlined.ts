// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BaseStationOutlinedSvg from '@colelab/icons-svg/es/asn/BaseStationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BaseStationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BaseStationOutlinedSvg }, slots);
  },
});
