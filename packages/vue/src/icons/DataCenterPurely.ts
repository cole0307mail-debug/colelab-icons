// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DataCenterPurelySvg from '@colelab/icons-svg/es/asn/DataCenterPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DataCenterPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DataCenterPurelySvg }, slots);
  },
});
